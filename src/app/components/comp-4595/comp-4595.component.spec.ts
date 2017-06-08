/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4595Component } from './comp-4595.component';

describe('Comp4595Component', () => {
  let component: Comp4595Component;
  let fixture: ComponentFixture<Comp4595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
