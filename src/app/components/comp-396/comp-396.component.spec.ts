/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp396Component } from './comp-396.component';

describe('Comp396Component', () => {
  let component: Comp396Component;
  let fixture: ComponentFixture<Comp396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
