/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4568Component } from './comp-4568.component';

describe('Comp4568Component', () => {
  let component: Comp4568Component;
  let fixture: ComponentFixture<Comp4568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
