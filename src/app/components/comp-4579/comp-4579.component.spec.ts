/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4579Component } from './comp-4579.component';

describe('Comp4579Component', () => {
  let component: Comp4579Component;
  let fixture: ComponentFixture<Comp4579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
