/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp319Component } from './comp-319.component';

describe('Comp319Component', () => {
  let component: Comp319Component;
  let fixture: ComponentFixture<Comp319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
