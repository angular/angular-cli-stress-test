/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp20Component } from './comp-20.component';

describe('Comp20Component', () => {
  let component: Comp20Component;
  let fixture: ComponentFixture<Comp20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
