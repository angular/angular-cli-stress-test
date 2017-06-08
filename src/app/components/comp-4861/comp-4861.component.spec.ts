/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4861Component } from './comp-4861.component';

describe('Comp4861Component', () => {
  let component: Comp4861Component;
  let fixture: ComponentFixture<Comp4861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
