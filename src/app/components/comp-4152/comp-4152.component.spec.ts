/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4152Component } from './comp-4152.component';

describe('Comp4152Component', () => {
  let component: Comp4152Component;
  let fixture: ComponentFixture<Comp4152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
