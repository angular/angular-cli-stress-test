/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp723Component } from './comp-723.component';

describe('Comp723Component', () => {
  let component: Comp723Component;
  let fixture: ComponentFixture<Comp723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
