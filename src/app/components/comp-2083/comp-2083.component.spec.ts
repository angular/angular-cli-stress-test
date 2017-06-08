/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2083Component } from './comp-2083.component';

describe('Comp2083Component', () => {
  let component: Comp2083Component;
  let fixture: ComponentFixture<Comp2083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
