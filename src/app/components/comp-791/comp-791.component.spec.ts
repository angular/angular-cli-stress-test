/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp791Component } from './comp-791.component';

describe('Comp791Component', () => {
  let component: Comp791Component;
  let fixture: ComponentFixture<Comp791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
