/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp683Component } from './comp-683.component';

describe('Comp683Component', () => {
  let component: Comp683Component;
  let fixture: ComponentFixture<Comp683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
