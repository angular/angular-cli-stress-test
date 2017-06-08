/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service420Service } from './service-420.service';

describe('Service420Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service420Service]
    });
  });

  it('should ...', inject([Service420Service], (service: Service420Service) => {
    expect(service).toBeTruthy();
  }));
});
