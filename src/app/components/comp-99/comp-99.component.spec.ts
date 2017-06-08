/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp99Component } from './comp-99.component';

describe('Comp99Component', () => {
  let component: Comp99Component;
  let fixture: ComponentFixture<Comp99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
