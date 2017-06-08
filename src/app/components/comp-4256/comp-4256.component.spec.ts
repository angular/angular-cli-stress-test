/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4256Component } from './comp-4256.component';

describe('Comp4256Component', () => {
  let component: Comp4256Component;
  let fixture: ComponentFixture<Comp4256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
