/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4816Component } from './comp-4816.component';

describe('Comp4816Component', () => {
  let component: Comp4816Component;
  let fixture: ComponentFixture<Comp4816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
