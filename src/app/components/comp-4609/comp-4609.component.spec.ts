/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4609Component } from './comp-4609.component';

describe('Comp4609Component', () => {
  let component: Comp4609Component;
  let fixture: ComponentFixture<Comp4609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
