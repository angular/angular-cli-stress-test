/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2939Component } from './comp-2939.component';

describe('Comp2939Component', () => {
  let component: Comp2939Component;
  let fixture: ComponentFixture<Comp2939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
