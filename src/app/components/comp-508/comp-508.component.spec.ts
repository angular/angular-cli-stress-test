/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp508Component } from './comp-508.component';

describe('Comp508Component', () => {
  let component: Comp508Component;
  let fixture: ComponentFixture<Comp508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
