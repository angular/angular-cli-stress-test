/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2588Component } from './comp-2588.component';

describe('Comp2588Component', () => {
  let component: Comp2588Component;
  let fixture: ComponentFixture<Comp2588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
