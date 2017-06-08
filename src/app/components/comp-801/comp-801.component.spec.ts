/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp801Component } from './comp-801.component';

describe('Comp801Component', () => {
  let component: Comp801Component;
  let fixture: ComponentFixture<Comp801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
