/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp840Component } from './comp-840.component';

describe('Comp840Component', () => {
  let component: Comp840Component;
  let fixture: ComponentFixture<Comp840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
