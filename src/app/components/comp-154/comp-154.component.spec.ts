/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp154Component } from './comp-154.component';

describe('Comp154Component', () => {
  let component: Comp154Component;
  let fixture: ComponentFixture<Comp154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
