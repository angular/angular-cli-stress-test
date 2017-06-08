/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4871Component } from './comp-4871.component';

describe('Comp4871Component', () => {
  let component: Comp4871Component;
  let fixture: ComponentFixture<Comp4871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
