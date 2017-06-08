/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp367Component } from './comp-367.component';

describe('Comp367Component', () => {
  let component: Comp367Component;
  let fixture: ComponentFixture<Comp367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
