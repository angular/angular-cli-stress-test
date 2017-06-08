/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4853Component } from './comp-4853.component';

describe('Comp4853Component', () => {
  let component: Comp4853Component;
  let fixture: ComponentFixture<Comp4853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
