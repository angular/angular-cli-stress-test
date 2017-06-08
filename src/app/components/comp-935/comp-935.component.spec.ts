/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp935Component } from './comp-935.component';

describe('Comp935Component', () => {
  let component: Comp935Component;
  let fixture: ComponentFixture<Comp935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
