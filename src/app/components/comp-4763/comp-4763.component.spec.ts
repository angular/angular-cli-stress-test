/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4763Component } from './comp-4763.component';

describe('Comp4763Component', () => {
  let component: Comp4763Component;
  let fixture: ComponentFixture<Comp4763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
