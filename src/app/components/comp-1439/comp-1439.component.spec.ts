/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1439Component } from './comp-1439.component';

describe('Comp1439Component', () => {
  let component: Comp1439Component;
  let fixture: ComponentFixture<Comp1439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
