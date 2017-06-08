/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp222Component } from './comp-222.component';

describe('Comp222Component', () => {
  let component: Comp222Component;
  let fixture: ComponentFixture<Comp222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
