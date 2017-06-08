/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp57Component } from './comp-57.component';

describe('Comp57Component', () => {
  let component: Comp57Component;
  let fixture: ComponentFixture<Comp57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
