/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp42Component } from './comp-42.component';

describe('Comp42Component', () => {
  let component: Comp42Component;
  let fixture: ComponentFixture<Comp42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
