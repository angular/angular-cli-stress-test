/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4069Component } from './comp-4069.component';

describe('Comp4069Component', () => {
  let component: Comp4069Component;
  let fixture: ComponentFixture<Comp4069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
