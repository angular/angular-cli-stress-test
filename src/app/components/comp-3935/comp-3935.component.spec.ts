/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3935Component } from './comp-3935.component';

describe('Comp3935Component', () => {
  let component: Comp3935Component;
  let fixture: ComponentFixture<Comp3935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
