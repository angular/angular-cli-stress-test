/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1154Component } from './comp-1154.component';

describe('Comp1154Component', () => {
  let component: Comp1154Component;
  let fixture: ComponentFixture<Comp1154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
