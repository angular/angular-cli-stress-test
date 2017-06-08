/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service519Service } from './service-519.service';

describe('Service519Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service519Service]
    });
  });

  it('should ...', inject([Service519Service], (service: Service519Service) => {
    expect(service).toBeTruthy();
  }));
});
