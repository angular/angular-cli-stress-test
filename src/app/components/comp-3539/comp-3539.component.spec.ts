/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3539Component } from './comp-3539.component';

describe('Comp3539Component', () => {
  let component: Comp3539Component;
  let fixture: ComponentFixture<Comp3539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
