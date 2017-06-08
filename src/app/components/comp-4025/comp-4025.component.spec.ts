/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4025Component } from './comp-4025.component';

describe('Comp4025Component', () => {
  let component: Comp4025Component;
  let fixture: ComponentFixture<Comp4025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
