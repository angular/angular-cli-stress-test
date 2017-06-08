/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4547Component } from './comp-4547.component';

describe('Comp4547Component', () => {
  let component: Comp4547Component;
  let fixture: ComponentFixture<Comp4547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
