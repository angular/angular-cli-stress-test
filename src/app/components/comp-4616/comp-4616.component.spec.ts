/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4616Component } from './comp-4616.component';

describe('Comp4616Component', () => {
  let component: Comp4616Component;
  let fixture: ComponentFixture<Comp4616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
