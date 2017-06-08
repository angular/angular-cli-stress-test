/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service359Service } from './service-359.service';

describe('Service359Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service359Service]
    });
  });

  it('should ...', inject([Service359Service], (service: Service359Service) => {
    expect(service).toBeTruthy();
  }));
});
