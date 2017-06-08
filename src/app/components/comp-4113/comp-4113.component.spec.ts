/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4113Component } from './comp-4113.component';

describe('Comp4113Component', () => {
  let component: Comp4113Component;
  let fixture: ComponentFixture<Comp4113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
