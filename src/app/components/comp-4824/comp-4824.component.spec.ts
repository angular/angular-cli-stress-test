/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4824Component } from './comp-4824.component';

describe('Comp4824Component', () => {
  let component: Comp4824Component;
  let fixture: ComponentFixture<Comp4824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
