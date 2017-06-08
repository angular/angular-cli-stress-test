/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp106Component } from './comp-106.component';

describe('Comp106Component', () => {
  let component: Comp106Component;
  let fixture: ComponentFixture<Comp106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
