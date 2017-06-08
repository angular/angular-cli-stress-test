/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service865Service } from './service-865.service';

describe('Service865Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service865Service]
    });
  });

  it('should ...', inject([Service865Service], (service: Service865Service) => {
    expect(service).toBeTruthy();
  }));
});
