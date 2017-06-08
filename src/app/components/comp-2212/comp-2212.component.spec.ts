/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2212Component } from './comp-2212.component';

describe('Comp2212Component', () => {
  let component: Comp2212Component;
  let fixture: ComponentFixture<Comp2212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
