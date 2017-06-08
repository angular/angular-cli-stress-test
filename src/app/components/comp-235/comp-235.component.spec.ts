/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp235Component } from './comp-235.component';

describe('Comp235Component', () => {
  let component: Comp235Component;
  let fixture: ComponentFixture<Comp235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
