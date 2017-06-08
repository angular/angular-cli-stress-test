/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp604Component } from './comp-604.component';

describe('Comp604Component', () => {
  let component: Comp604Component;
  let fixture: ComponentFixture<Comp604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
