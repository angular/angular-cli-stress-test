/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4747Component } from './comp-4747.component';

describe('Comp4747Component', () => {
  let component: Comp4747Component;
  let fixture: ComponentFixture<Comp4747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
