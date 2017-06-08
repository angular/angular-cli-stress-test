/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp956Component } from './comp-956.component';

describe('Comp956Component', () => {
  let component: Comp956Component;
  let fixture: ComponentFixture<Comp956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
