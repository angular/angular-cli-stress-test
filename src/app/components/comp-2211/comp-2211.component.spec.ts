/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2211Component } from './comp-2211.component';

describe('Comp2211Component', () => {
  let component: Comp2211Component;
  let fixture: ComponentFixture<Comp2211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
