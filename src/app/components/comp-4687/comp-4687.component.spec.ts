/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4687Component } from './comp-4687.component';

describe('Comp4687Component', () => {
  let component: Comp4687Component;
  let fixture: ComponentFixture<Comp4687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
