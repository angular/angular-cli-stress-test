/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp981Component } from './comp-981.component';

describe('Comp981Component', () => {
  let component: Comp981Component;
  let fixture: ComponentFixture<Comp981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
