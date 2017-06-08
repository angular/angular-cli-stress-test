/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp107Component } from './comp-107.component';

describe('Comp107Component', () => {
  let component: Comp107Component;
  let fixture: ComponentFixture<Comp107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
